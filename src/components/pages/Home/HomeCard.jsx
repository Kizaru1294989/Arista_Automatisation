import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const HomeCard = () => {
    return (
      <>
       
            <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography color={'white'} component="div" variant="h3">
                    Automatisation Arista Labs
                </Typography>
                <a href='http://10.43.192.100/'>
                    Lab Eve Ng http://10.43.192.100/
                </a>
                <Typography color={'white'} variant="subtitle1" component="div">
                    Python , Ansible
                </Typography>
                <Typography color={'white'} variant="subtitle1" component="div">
                    Username : cvpadmin
                </Typography>
                <Typography color={'white'} variant="subtitle1" component="div">
                    Password : Exaprobe1234
                </Typography>
            </CardContent>

            <CardContent style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 0 50%' }}>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        4 Spines
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 1 : <a href="http://10.43.192.25/">10.43.192.25</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 2 : <a href="http://10.43.192.26/">10.43.192.26</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 3 : <a href="http://10.43.192.27/">10.43.192.27</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 4 : <a href="http://10.43.192.28/">10.43.192.28</a>
                    </Typography>
                </div>

                <div style={{ flex: '0 0 50%' }}>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        8 Leafs
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 1 : <a href="http://10.43.192.29/">10.43.192.29</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 2 : <a href="http://10.43.192.30/">10.43.192.30</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 3 : <a href="http://10.43.192.31/">10.43.192.31</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 4 : <a href="http://10.43.192.32/">10.43.192.32</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 5 : <a href="http://10.43.192.33/">10.43.192.33</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 6 : <a href="http://10.43.192.34/">10.43.192.34</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 7 : <a href="http://10.43.192.35/">10.43.192.35</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 8 : <a href="http://10.43.192.36/">10.43.192.36</a>
                    </Typography>
                </div>
                <div style={{ flex: '1 0 50%' }}>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        4 Host
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 1 : <a href="http://10.43.192.37/">10.43.192.37</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 2 : <a href="http://10.43.192.38/">10.43.192.38</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 3 : <a href="http://10.43.192.39/">10.43.192.39</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        - 4 : <a href="http://10.43.192.40/">10.43.192.40</a>
                    </Typography>
                </div>

            </CardContent>
            </>
    )
}

export default HomeCard;
