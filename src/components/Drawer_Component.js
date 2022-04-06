import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button} from 'antd';

export default function Drawer_Component (){
  const [visible, setVisible] = useState(false)

  const showDrawer = () => setVisible(true)

  const onClose = () => setVisible(false)

  return (
    <>
      <div style={{paddingRight: '100px'}}>
        <Button onClick={showDrawer}>
            View options
          </Button>
          </div>
      <Drawer
          title="Options"
          placement={'left'}
          closable={true}
          onClose={onClose}
          visible={visible}
          key={'left'}
        >
        <a href="/Drawer">PRODUCT TABLE</a>
        </Drawer>
        </>
  )}