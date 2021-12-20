CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"period" integer NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "classes" (
	"id" serial NOT NULL,
	"subject_id" integer NOT NULL,
	"professor_id" integer NOT NULL,
	CONSTRAINT "classes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"category_id" integer NOT NULL,
	"class_id" integer NOT NULL,
	"link" TEXT NOT NULL UNIQUE,
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "classes" ADD CONSTRAINT "classes_fk0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "classes" ADD CONSTRAINT "classes_fk1" FOREIGN KEY ("professor_id") REFERENCES "professors"("id");

ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("category_id") REFERENCES "categories"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("class_id") REFERENCES "classes"("id");



-- STOP HERE IF YOU DON'T WANT TO POPULATE THE DATABASE

INSERT INTO "subjects" ("name", "period") VALUES ('Introdução à Engenharia Elétrica', 1), ('Programação de Computadores I', 1), ('Circuitos Elétricos', 2), ('Programação de Computadores II', 2), ('Eletromagnetismo', 3), ('Máquinas Elétricas', 3), ('Telecomunicações', 4), ('Sistemas Microprocessados', 4), ('Automação Industrial', 5), ('Sistemas Microcomputadorizados', 5), ('Liderança', 0);

INSERT INTO "professors" ("name") VALUES ('Safira Freixo Portela'), ('Hélio Bulhões Parente'), ('Mateo Couceiro Pedroso'), ('Arianna Camarinho Pegado'), ('Yanni Alcoforado Rei'), ('Matilde Vides Fortunato'), ('Gerson Simão Figueiredo');

INSERT INTO "classes" ("subject_id", "professor_id") VALUES (1, 6), (2, 7), (2, 5), (3, 2), (4, 7), (4, 5), (5, 1), (6, 5), (7, 3), (8, 4), (9, 5), (10, 3), (11, 4);

INSERT INTO "categories" ("name") VALUES ('P1'), ('P2'), ('P3'), ('P4'), ('Exame'), ('Outros');
