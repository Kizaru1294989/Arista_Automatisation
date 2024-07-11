


export const GetLabStatus = async ({setLab,setStatus,setFormValue,setError, setLoading}) => {
    try {
      const res = await fetch("http://10.43.193.242:5000/python/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      if (data.labs !== "") {
        setLab(data.labs[0]);
        setStatus(data.statut[0]);

        setFormValue({
          host1: data.host1,
          host2: data.host2,
          host3: data.host3,
          host4: data.host4,
          spine1: data.spine1,
          spine2: data.spine2,
          spine3: data.spine3,
          spine4: data.spine4,
          leaf1: data.leaf1,
          leaf2: data.leaf2,
          leaf3: data.leaf3,
          leaf4: data.leaf4,
          leaf5: data.leaf5,
          leaf6: data.leaf6,
          leaf7: data.leaf7,
          leaf8: data.leaf8,
        });
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) { 
      setError(error.message);
      console.log('ERROR :' + error);
    }
  };