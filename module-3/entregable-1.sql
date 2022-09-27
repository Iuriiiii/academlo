CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "email" varchar(100) UNIQUE NOT NULL,
  "password" varchar(50) NOT NULL,
  "role_id" int,
  "age" int
);
CREATE TABLE "courses" (
  "id" uuid PRIMARY KEY,
  "title" varchar(100) NOT NULL,
  "description" varchar(400) NOT NULL,
  "level" int DEFAULT 1,
  "category_id" int NOT NULL,
  "video_id" int,
  "teacher_id" uuid NOT NULL
);
CREATE TABLE "course_video" (
  "id" int PRIMARY KEY,
  "title" varchar(300) NOT NULL,
  "url" varchar(300) NOT NULL
);
CREATE TABLE "categories" (
  "id" int PRIMARY KEY,
  "name" varchar(50) NOT NULL
);
CREATE TABLE "roles" (
  "id" int PRIMARY KEY,
  "name" varchar(50) NOT NULL
);
ALTER TABLE "users" ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("id");
ALTER TABLE "courses" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");
ALTER TABLE "courses" ADD FOREIGN KEY ("video_id") REFERENCES "course_video" ("id");
ALTER TABLE "courses" ADD FOREIGN KEY ("teacher_id") REFERENCES "users" ("id");
insert into roles (
	id,
	name
) values (
	1,
	'student'
), (
	2,
	'teacher'
);
insert into users (
	id,
	name,
	email,
	password,
	role_id,
	age
) values (
	'8374f2e8-f7e7-454f-8d5d-62382392d8f3',
	'Joe',
	'joe@gmail.com',
	'pass1234',
	1,
	18
), (
	'67a23900-3e6c-11ed-b878-0242ac120002',
	'Anna',
	'anna@gmail.com',
	'pass5678',
	2,
	24
);
insert into categories (
	id,
	name
) values (
	1,
	'first category'
), (
	2,
	'first category'
);
insert into course_video (
	id,
	title,
	url
) values (
	1,
	'First video',
	'https://us02web.zoom.us/rec/share/8ZgWvA4cM8MSUyltEggfbW6r1-NufufLFdZBzkh2pNPIY8eDja4fheHrNXZPLuEa.zuZ5nefbGPSbGN5f'
), (
	2,
	'second video',
	'https://us02web.zoom.us/rec/share/WURXj_kSJ__k_9A1KJVogkw2n91DPvCZ4r-XlXiH5lmo0p1zXfyBqJXMUfrcTSGd.LdoyMxHLEFIdE_ns'
);
insert into courses (
	id,
	title,
	description,
	category_id,
	video_id,
	teacher_id	
) values (
	'123416ea-3e6d-11ed-b878-0242ac120002',
	'First course',
	'First course description',
	1,
	1,
	'8374f2e8-f7e7-454f-8d5d-62382392d8f3'
), (
	'4132a2ee-3e6e-11ed-b878-0242ac120002',
	'Second course',
	'Second course description',
	1,
	2,
	'8374f2e8-f7e7-454f-8d5d-62382392d8f3'
);