DROP TABLE milestone if exist;
CREATE TABLE milestone (
    milestone_id bigint not null auto increment primary key,
    title varchar(1000) not null,
    description varchar(3000) null,
    datetime date
);