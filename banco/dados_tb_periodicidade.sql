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
-- Data for Name: tb_periodicidade; Type: TABLE DATA; Schema: dbesusgestor; Owner: postgres
--

COPY tb_periodicidade (co_periodicidade, ds_periodicidade) FROM stdin;
99	Não se aplica
120	Quadrimestral
1	Diaria
7	Semanal
15	Quinzenal
30	Mensal
90	Trimestral
60	Bimensal
360	Anual
1080	Trienal
\.


--
-- PostgreSQL database dump complete
--
