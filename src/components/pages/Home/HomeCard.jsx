import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ButtonTarif } from '../../ButtonTarif/ButtonTarif';
import { SlideDialog } from '../../Dialog/SlideDialog';
import InfoTips from './InfoTips';
import { SlideDialogLab } from '../../Dialog/SlideDialogLab';
import React, { useState, useEffect } from 'react';

export const HomeCard = ({setLoadingDialog}) => {

    return (
      <>
            <CardContent style={{ display: 'flex', flexDirection: 'column', width : '100%' }}>
                <Typography color={'white'} component="div" variant="h4">
                    Automatisation Arista Labs 
                </Typography>
                
                <a href='http://10.43.192.129/' target="_blank">
                    10.43.192.129
                </a>
            
                <Typography color={'white'} variant="subtitle1" component="div">
                MLAG / BGP / VXLAN-EVPN-L2
                </Typography>
                <Typography color={'white'} variant="subtitle1" component="div">
                    Username : cvpadmin
                </Typography>
                <Typography color={'white'} variant="subtitle1" component="div">
                    Password : Exaprobe1234
                </Typography>
            </CardContent>

            <CardContent style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' , justifyContent : 'center' , alignItems : 'center' }}>
                <div style={{ flex: '0 0 100%' }}>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        4 Spines
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Spine 1 : <a href="http://10.43.192.129/html5/#/client/MzI3NzcAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.25</a>
                    </Typography>

                    <Typography color={'white'} variant="subtitle1" component="div">
                    Spine  2 : <a href="http://10.43.192.129/html5/#/client/MzI3NzgAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.26</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Spine   3 : <a href="http://10.43.192.129/html5/#/client/MzI3NzkAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.27</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Spine   4 : <a href="http://10.43.192.129/html5/#/client/MzI3ODAAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.28</a>
                    </Typography>
                </div>

                <div style={{ flex: '0 0 100%' }}>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        8 Leafs
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        Leaf 1 : <a href="http://10.43.192.129/html5/#/client/MzI3NjkAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.29</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Leaf  2 : <a href="http://10.43.192.129/html5/#/client/MzI3NzAAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.30</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Leaf  3 : <a href="http://10.43.192.129/html5/#/client/MzI3NzEAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.31</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Leaf   4 : <a href="http://10.43.192.129/html5/#/client/MzI3NzIAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.32</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Leaf   5 : <a href="http://10.43.192.129/html5/#/client/MzI3NzMAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.33</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Leaf  6 : <a href="http://10.43.192.129/html5/#/client/MzI3NzQAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.34</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Leaf   7 : <a href="http://10.43.192.129/html5/#/client/MzI3NzUAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.35</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Leaf  8 : <a href="http://10.43.192.129/html5/#/client/MzI3NzYAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.36</a>
                    </Typography>
                </div>
                <div style={{ flex: '0 0 100%' }}>
                    <Typography color={'white'} variant="subtitle1" component="div">
                        4 Hosts
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Host  1 : <a href="http://10.43.192.129/html5/#/client/MzI3ODMAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.37</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Host   2 : <a href="http://10.43.192.129/html5/#/client/MzI3ODEAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.38</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Host  3 : <a href="http://10.43.192.129/html5/#/client/MzI3ODIAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.39</a>
                    </Typography>
                    <Typography color={'white'} variant="subtitle1" component="div">
                    Host  4 : <a href="http://10.43.192.129/html5/#/client/MzI3ODQAYwBteXNxbA==?token=7C4043A4B84D24289BE7FA530EDBB208B2154A0CA7E3B0FD3BC4D7B387EBE834" target="_blank">10.43.192.40</a>
                    </Typography>
                    
                </div>
                
                <SlideDialogLab setLoadingDialog={setLoadingDialog}  />
                <SlideDialog/>
            </CardContent>
            </>
    )
}

export default HomeCard;

