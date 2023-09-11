#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  \connect $APP_DB_NAME $APP_DB_USER
  CREATE TABLE public."user" (
      id integer NOT NULL,
      nome character varying NOT NULL,
      sobrenome character varying NOT NULL,
      email character varying NOT NULL,
      senha character varying NOT NULL,
      tipo_key character varying DEFAULT 'cliente'::character varying NOT NULL,
      deleted_at timestamp without time zone
  );
  INSERT INTO public."user" VALUES (1, 'Ariane', 'Araújo Cabral de Figueiredo', 'ariane.figueiredo@senac.com.br', '\$2a\$10\$b46/c7Tsrp9WU9K4wo1ZR.DsV/QPWkMcaYIIIyTAQ8qfV6ddD2kK6', 'cliente', NULL);
  INSERT INTO public."user" VALUES (2, 'David', 'Santana da Silva', 'david.silva@senac.com.br', '\$2a\$10\$EGE2B3581l4rWss28O5OF.iCOrLPkqn5FEmDrxj5ix43upWi9j2HK', 'vendedor', NULL);
  INSERT INTO public."user" VALUES (3, 'Felipe', 'Valli', 'felipe.valli@senac.com.br', '\$2a\$10\$HdP9Frunr.YizqrIdlFgo.KHGiJHORp35L.wHO9NmMZTPM.ISAKnC', 'cliente', NULL);
  INSERT INTO public."user" VALUES (4, 'Gilmair', 'Vieira Barros', 'gilmair.barros@senac.com.br', '\$2a\$10\$bwHmgE.Q4yIR/43s.HBVxuRW1Yf0RaJS5zd/tm3ch1l32mXccFfX6', 'gerente', NULL);
  INSERT INTO public."user" VALUES (5, 'Ignacio', 'Javier Mourullo', 'ignacio.mourullo@senac.com.br', '\$2a\$10\$tS2uqw/lIqqFJVy/XjX/WeySrevLtH9P2AgR5r./kOv3cxVoSwGDK', 'vendedor', NULL);
  INSERT INTO public."user" VALUES (6, 'Josué', 'Domingues de Oliveira Neto', 'josué.neto@senac.com.br', '\$2a\$10\$gx.0F/nO.RxPnK6q6TgKWOM/hxXceuba0RRvvfid2QZE9wN3J.CKi', 'cliente', NULL);
  INSERT INTO public."user" VALUES (7, 'Lucas', 'Souza Pereira', 'lucas.pereira@senac.com.br', '\$2a\$10\$DZUy7thjunF1k/89kCSkquDsfpANWsypHpjVlpkHftrtvzI6sa14u', 'gerente', NULL);
EOSQL

