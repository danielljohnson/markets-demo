define([
    'chai',
    'sinon',
    'app/domain/Market',
    'app/domain/Markets',
    'app/widgets/markets/MarketsModalWidget'
], function(chai, sinon, Market, Markets, MarketsModalWidget) {
    var assert = chai.assert,
        marketsModalWidget;

    before(function() {
        marketsModalWidget = new MarketsModalWidget({
            collection: new Markets(),
            model: new Market(),
            mode: 'create'
        });
    });

    describe('Markets Modal Widget', function() {
        it('renders the right element and id attribute', function() {
            assert.equal(marketsModalWidget.el.tagName.toLowerCase(), 'div');
            assert.equal(marketsModalWidget.el.id, 'marketsModal');
        });

        it('showErrors', function() {
            marketsModalWidget.render();

            var textSpy = sinon.spy($.prototype, 'text');
            var fadeInSpy = sinon.spy($.prototype, 'fadeIn');

            var errors = JSON.stringify({
                "name": "Name is required"
            });

            marketsModalWidget.showErrors(new Market(), errors);

            sinon.assert.called(textSpy);
            sinon.assert.called(fadeInSpy);

            $.prototype.text.restore();
            $.prototype.fadeIn.restore();
        });

        it('marketsFormSave invalid model', function() {
            var e = new $.Event('click');

            var saveSpy = sinon.spy(marketsModalWidget.model, 'save');

            marketsModalWidget.marketsFormSave(e);

            sinon.assert.notCalled(saveSpy);

            marketsModalWidget.model.save.restore();
        });

        it('marketsFormSave valid model', function() {
            var e = new $.Event('click');

            var saveSpy = sinon.spy(marketsModalWidget.model, 'save');

            marketsModalWidget.model.set('name', 'test');
            marketsModalWidget.model.set('location_id', 1);
            marketsModalWidget.model.set('currency_id', 1);

            marketsModalWidget.marketsFormSave(e);

            sinon.assert.called(saveSpy);

            marketsModalWidget.model.save.restore();
        });

        it('marketsFormDone', function() {
            var addSpy = sinon.spy(marketsModalWidget.collection, 'add');

            marketsModalWidget.model.set('name', 'test');
            marketsModalWidget.model.set('location_id', 1);
            marketsModalWidget.model.set('currency_id', 1);

            marketsModalWidget.model.save();

            marketsModalWidget.marketsFormDone();

            sinon.assert.calledWith(addSpy, marketsModalWidget.model);

            marketsModalWidget.collection.add.restore();
        });

        it('marketsFormClose', function() {
            var setSpy = sinon.spy(marketsModalWidget.model, 'set');
            var modalSpy = sinon.spy($.prototype, 'modal');

            marketsModalWidget.marketsFormClose();

            sinon.assert.calledWith(setSpy, {});
            sinon.assert.calledWith(modalSpy, 'hide');

            marketsModalWidget.model.set.restore();
            $.prototype.modal.restore();
        });
    });
});