import psycopg2

def insert_record_device(data, device):
    record_id = 1
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
        
        cursor.execute(update_query, (data[device], record_id))
        
        conn.commit()
        
        cursor.close()
        conn.close()
        print("Record updated successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")
        

if __name__ == "__main__":
    import sys
    import json

    data = json.loads(sys.argv[1])
    device = sys.argv[2]
    insert_record_device(data, device)