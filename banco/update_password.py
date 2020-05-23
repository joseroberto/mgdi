#!/usr/bin/python3

import hashlib
import psycopg2

db_conn = psycopg2.connect(host='postgresql', port=5432, dbname='dbspo', user='pgdbadm', password='ga->9e8hFzvH4%q3')
db_cursor = db_conn.cursor()
update_cursor = db_conn.cursor()

db_cursor.execute('select co_user, ds_cpf from dbesusgestor.tb_user_mgi where by_senha_hash is null');
records = db_cursor.fetchall()

for row in records:
    t_hash = hashlib.sha256(('nova' + row[1][:5]).encode())
    print(row[0], row[1], t_hash.hexdigest())
    update_cursor.execute('update dbesusgestor.tb_user_mgi set by_senha_hash=%s where co_user=%s', (t_hash.digest(),row[0]))

db_conn.commit()
db_cursor.close()