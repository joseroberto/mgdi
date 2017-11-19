--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = dbmgi, pg_catalog;

--
-- Data for Name: tb_tipo_consulta; Type: TABLE DATA; Schema: dbesusgestor; Owner: postgres
--

COPY tb_tipo_consulta (co_tipo_consulta, ds_tipo_consulta) FROM stdin;
0	Sem informação
1	Fórmula
2	Query
3	Importação
4	ETL
\.


--
-- PostgreSQL database dump complete
--
