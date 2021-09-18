import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

class Gambar extends Component {
    state = {
            angka:0
        }

    tambahAngka = () => {
        this.setState((state) => {
            return {
                angka: state.angka + 1
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (this.state.angka !== nextState.angka) {
        if (nextState.angka >5){
            alert(`Stock Habis`)
            return false
        }
        window.confirm('Tambahkan ke keranjang?')
        return true
    }
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Berhasil ditambahkan ke keranjang`)
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
            <Card bordered={false} hoverable style={{background:'#f0b71d',display: 'inline-block', width:700, margin:'30px', boxShadow:'0px 1px 1px'}} 
            cover={<img alt="gmb" width="500px" src="https://media.suara.com/pictures/970x544/2021/03/23/28215-poco-x3-pro.jpg" />}>
            <Meta title="POCO X3 Pro" />
            <div>
            <Button bordered={false} type="success" shape="round" style={{background:'#000000',color:'#ffffff',margin:'15px 25px 0px 25px'}} onClick={this.tambahAngka}>
                Masukkan Keranjang
            </Button>
            </div>
            <Text>Keranjang Saya : {this.state.angka}</Text>
            </Card>
            </div>
        );
    }
}

export default Gambar;