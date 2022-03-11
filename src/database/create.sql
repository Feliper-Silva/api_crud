create schema verzelApi;

create table verzelApi.modules (
  id serial primary key,
  title text not null,
  module text not null,
  aulaDate date not null

)