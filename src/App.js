import React from 'react';
import Gambar from './Component/Baju';
import Spesifikasi from './Component/BajuDetail';
import PilihanWarna from './Component/GBajuDetail';
import 'antd/dist/antd.css';
import { Layout, Typography, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

class App extends React.Component {
  state = {
    komponenMuncul : false
  }
  
  ubahKomponenMuncul = () => {
    this.setState((state) => {
        return {komponenMuncul : !this.state.komponenMuncul}
    })
  }
  
  state = {
  komponenGambar : false
  }
  
  ubahKomponenGambar = () => {
    this.setState((state) => {
      return {komponenGambar : !this.state.komponenGambar}
    })
  }
  
  componentDidMount() {
    alert(`Mau beli?`)
  }

  render() {
    return (
      <Layout style={{background:'#000000'}}>
        <Header style={{background:'#f0b71d', justifyContent:'space-between', display: 'flex', alignItems: 'center', marginBottom: '20px', padding: '20px 40px'}}>
          <Text style={{color:'#000000', fontSize: '25px'}}>
          INI TUGAS
          </Text>
          <Text style={{fontFamily:'Roboto', color:'#000000', fontSize: '15px', margin: '0px'}}>
          Log In
          </Text>
        </Header>
        <Content style={{textAlign:'center', display: 'inline-block'}}>
          <Gambar />
          <div style={{Align:'center', display: 'inline-block'}}>
            <div style={{margin:'10px'}}>
              <Button Align="center" style={{background:'#000000',color:'#ffffff'}} onClick={this.ubahKomponenGambar}>{this.state.komponenGambar ? 'Sembunyikan' : 'Lihat'} Pilihan Warna </Button>
              {this.state.komponenGambar ? <PilihanWarna/> : ''}
            </div>
            <Button Align="center" style={{background:'#000000',color:'#ffffff',margin:'15px 25px 25px 25px'}} onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'Sembunyikan' : 'Lihat'} Tentang Produk </Button>
            {this.state.komponenMuncul ? <Spesifikasi/> : ''}
          </div>
        </Content>
        <Footer style={{background:'#f0b71d', textAlign:'center', width:'100%', fontFamily:'Roboto', color:'#FFFFFF'}}>
        </Footer>
      </Layout>
    )
  }
}

export default App;