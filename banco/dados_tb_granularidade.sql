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
-- Data for Name: tb_granularidade; Type: TABLE DATA; Schema: dbesusgestor; Owner: postgres
--

COPY tb_granularidade (co_granularidade, ds_granularidade, ds_sigla) FROM stdin;
5	CNES	CN
4	Município	MN
3	Estado	UF
1	Brasil	BR
2	Região	RG
\.

COPY tb_granularidade (co_granularidade, ds_granularidade) FROM stdin;
0	Nenhuma
\.


--
-- PostgreSQL database dump complete
--
