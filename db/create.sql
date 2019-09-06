drop table if exists house;

CREATE TABLE house (
  property_name text NOT NULL,
  property_address varchar(40) NOT NULL,
  city integer NOT NULL,
  property_state varchar(40) NOT NULL,
  zip integer NOT NULL
);