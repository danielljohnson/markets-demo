CREATE DATABASE markets;

USE markets;

CREATE TABLE location (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE currency (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE market (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    currency INT NULL,
    location INT NULL,
    start_date TIMESTAMP NULL,
    end_date TIMESTAMP NULL,
    FOREIGN KEY (currency_id) REFERENCES currency(id) ON DELETE CASCADE,
    FOREIGN KEY (location_id) REFERENCES location(id) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO location 
    (name) 
VALUES 
    ('Asia'),
    ('Americas'),
    ('Europe');
    
INSERT INTO currency 
    (name, description) 
VALUES 
    ('USD', 'US Dollar'),
    ('JPY', 'Japanese Yen'),
    ('INR', 'Indian Rupeer');