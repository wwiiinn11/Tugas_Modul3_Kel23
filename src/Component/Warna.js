import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Image } from 'antd';

class PilihanWarna extends Component {
    state = {
        deskripsiWarna : "POCO X3 Pro"
    }
    
    ubahWarna = () => {
        this.setState((state) => {
            if (state.deskripsiWarna === "POCO X3 Pro"){
                return {deskripsiWarna : "Metal Bronze, Phantom Black, Frost Blue"}
            } else {
                return {deskripsiWarna : "POCO X3 Pro"}
            }
        })
    }

    componentWillUnmount() {
        alert('Anda yakin ingin menyembunyikan pilihan warna?')
        }

    render() {
        return (
            <Card size="small" bordered={false} style={{background:'#000000'}}>
                <Row justify="center">
                    <Col>
                        <Image width={300} src="https://i01.appmifile.com/webfile/globalimg/id_poco/cms/F1BC689B-3B3F-1D63-297C-01BF46922A5A.jpg"/>
                    </Col>
                    <Col>
                        <Image width={300} src="https://i01.appmifile.com/webfile/globalimg/id_poco/cms/F5CEA347-8BB6-BC77-AF33-8C343ED45796.jpg"/>
                    </Col>
                    <Col>
                        <Image width={300} src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1618314622.18989437.png"/>
                    </Col>
                </Row>
                <div style={{color:'#ffffff', Align:'center', display: 'inline-block'}}>
                    <a onClick={this.ubahWarna}> Warna </a>
                    <p>{this.state.deskripsiWarna}</p>
                </div>
            </Card>
        );
    }
}

export default PilihanWarna;