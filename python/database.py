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
        
def insert_log_record(data):
    conn_params = {
        'dbname': 'lab',
        'user': 'rais',
        'password': 'rais',
        'host': 'localhost',
        'port': '5432'
    }
    
    table = 'regular.log'
    
    insert_query = f"""
    INSERT INTO {table} (statut, lab)
    VALUES (%s, %s)
    """
    
    try:
        # Connect to the database
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        print(data)
        
        # Execute the insert query
        cursor.execute(insert_query, (data['statut'], data['lab']))
        
        # Commit the changes
        conn.commit()
        
        # Close the cursor and connection
        cursor.close()
        conn.close()
        print("Record inserted successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")
        
def insert_record_device(data, device):
    # Set the ID for the record to be updated
    record_id = 1
    conn_params = {
        'dbname': 'lab',
        'user': 'rais',
        'password': 'rais',
        'host': 'localhost',
        'port': '5432'
    }
    
    table = 'regular.device'
    
    # Update query
    update_query = f"""
    UPDATE {table}
    SET {device} = %s
    WHERE id = %s
    """
    
    try:
        # Connect to the database
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        print(data)
        
        # Execute the update query
        cursor.execute(update_query, (data[device], record_id))
        
        # Commit the changes
        conn.commit()
        
        # Close the cursor and connection
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
    
def return_to_zero_device_record():
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
    SET 
        host1 = NULL,
        host2 = NULL,
        host3 = NULL,
        host4 = NULL,
        leaf1 = NULL,
        leaf2 = NULL,
        leaf3 = NULL,
        leaf4 = NULL,
        leaf5 = NULL,
        leaf6 = NULL,
        leaf7 = NULL,
        leaf8 = NULL,
        spine1 = NULL,
        spine2 = NULL,
        spine3 = NULL,
        spine4 = NULL
    WHERE 
        id = 1;
    """
    
    try:
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        cursor.execute(update_query)
        conn.commit()
        cursor.close()
        conn.close()
        print("Record updated successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")

def read_device_records():
    conn_params = {
        'dbname': 'lab',
        'user': 'rais',
        'password': 'rais',
        'host': 'localhost',
        'port': '5432'
    }
    
    table = 'regular.device'
    select_query = f"SELECT host1, host2, host3, host4, leaf1, leaf2, leaf3, leaf4, leaf5, leaf6, leaf7, leaf8, spine1, spine2, spine3, spine4 FROM {table}"
    
    try:
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        cursor.execute(select_query)
        records = cursor.fetchall()
        cursor.close()
        conn.close()
        
        columns = ['host1', 'host2', 'host3', 'host4', 'leaf1', 'leaf2', 'leaf3', 'leaf4', 'leaf5', 'leaf6', 'leaf7', 'leaf8', 'spine1', 'spine2', 'spine3', 'spine4']
        results = [dict(zip(columns, record)) for record in records]
        # print(results)
        return results
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


