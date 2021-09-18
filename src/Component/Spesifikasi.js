import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

class Spesifikasi extends Component {
    state = {
        tampilkan : false
    }
    
    ubahtampilkan = () => {
        this.setState((state) => {
            return {tampilkan : !this.state.tampilkan}
        })
    }

    componentWillUnmount() {
        alert('Anda yakin ingin menyembunyikan spesifikasi?')
        }       

    render() {
        return (
            <Card bordered={false} size="small" style={{ background:'#000000', Align:'center', width: '100%', color:'#ffffff'}}>
                <p style={{margin:'2px'}}>POCO X3 Pro memiliki teknologi memori UFS 3.1 yang ditingkatkan, POCO X3 Pro menawarkan kecepatan baca dan tulis yang tajam. Memuat game dan aplikasi tanpa harus menunggu.</p>
                <p style={{margin:'2px'}}>POCO X3 Pro menggunakan Teknologi LiquidCool 1.0 Plus. </p>
                <p style={{margin:'2px'}}>Mempertahankan kinerja puncak dengan mudah selama sesi permainan yang berat, Panas menghilang dalam 3D sehingga kamu dapat terus bermain dengan kecepatan penuh! </p>
                <p style={{margin:'2px'}}>Pendinginan prosesor hingga 6°C, Grafit multi-layer, Pipa panas tembaga D5.</p>
                <p style={{margin:'2px'}}>POCO X3 Pro dilengkapi dengan Corning® Gorilla® Glass 6 Tahan jatuh dari ketinggian hingga 1,6m ke permukaan yang keras dan kasar.</p> 
                <p style={{margin:'2px'}}>Peningkatan ketahanan gores Peningkatan hingga 2x dibandingkan dengan aluminosilikat alternatif*.</p>
                <p style={{margin:'2px'}}>.</p>
                <p style={{margin:'2px'}}>Spesifikasi</p>
                <p style={{margin:'2px'}}>Penyimpanan dan RAM</p>
                <p style={{margin:'2px'}}>6+128GB/ 8+256GB</p>
                <p style={{margin:'2px'}}>LPDDR4X+UFS 3.1</p>
                <p style={{margin:'2px'}}>.</p>
                <p style={{margin:'2px'}}>Dimensi</p>
                <p style={{margin:'2px'}}>Tinggi: 165,3 mm</p>
                <p style={{margin:'2px'}}>Lebar: 76,8 mm</p>
                <p style={{margin:'2px'}}>Ketebalan: 9,4 mm</p>
                <p style={{margin:'2px'}}>Berat: 215g</p>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <a onClick={this.ubahtampilkan}>{this.state.tampilkan ? 'Sembunyikan' : 'Tampilkan'} Pilihan Storage</a>
                    {this.state.tampilkan ? 
                    <p>6+128GB, 8+256GB</p> : ''}
                </div>
            </Card>
        );
    }
}

export default Spesifikasi;