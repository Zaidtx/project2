-- Drop the banki if it exists--

DROP DATABASE IF EXEISTS banki;

--- creats banki database --
CREAT DATABASE banki;
USE banki;

CREAT TABLE `banki` (

    `id` Int(11) AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `account number` INTEGER (255) NOT NULL,
    `balance` INTEGER(255) NOT NULL,
    'email' VARCHAR(255) NOT NULL,
    `phone#`INTEGER (255) NOT NULL,
PRIMARY KEY ( `id` )
);






