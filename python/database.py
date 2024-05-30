import psycopg2



# update regular.lab SET statut = 'finished' WHERE id = 1;
def update_record(data):

    conn_params = {
        'dbname': 'lab',
        'user': 'rais',
        'password': 'rais',
        'host': 'localhost',
        'port': '5432'
    }
    
    table = 'regular.lab'
    
    update_query = f"""
    UPDATE {table}
    SET statut = %s, lab = %s
    WHERE id = %s
    """
    
    try:
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        print(data)
        
        cursor.execute(update_query, (data['statut'], data['lab'], data['id']))
        
        conn.commit()
        cursor.close()
        conn.close()
        print("Record updated successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")
        
def update_record_device(data,device):

    conn_params = {
        'dbname': 'lab',
        'user': 'rais',
        'password': 'rais',
        'host': 'localhost',
        'port': '5432'
    }
    
    table = 'regular.device'
    
    update_query = f"""
    UPDATE {table}
    SET {device} = %s
    WHERE id = %s
    """
    
    try:
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        print(data)
        
        cursor.execute(update_query, (data[{device}], data['id']))
        
        conn.commit()
        cursor.close()
        conn.close()
        print("Record updated successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")

def read_records():
    conn_params = {
        'dbname': 'lab',
        'user': 'rais',
        'password': 'rais',
        'host': 'localhost',
        'port': '5432'
    }
    
    table = 'regular.lab'
    select_query = f"SELECT statut, lab FROM {table}"
    
    try:
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        cursor.execute(select_query)
        records = cursor.fetchall()
        cursor.close()
        conn.close()
        
        statuses = [record[0] for record in records]
        labs = [record[1] for record in records]
        
        return statuses, labs
    except Exception as e:
        print(f"An error occurred: {e}")
        return [], []


