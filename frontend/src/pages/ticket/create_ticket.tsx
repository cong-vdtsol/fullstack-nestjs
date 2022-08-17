import { Layout } from "antd";
import React from "react";
import {
  CommentPage,
  NotarizedContract,
  Contract,
  Finish,
  SigningProcess,
  StorageContract,
  UpLoad,
} from "../../components";
const { Header, Footer, Content } = Layout;

const createTicket: React.FC = () => {
  return (
    <>
      <Layout className="mx-auto bg-backgroundAuth relative">
        <div className="absolute left-100 w-auto h-auto">
          <Header className="bg-inherit left-">
            <h1>Create Ticket</h1>
            
          </Header>
          <Content className="">Content</Content>
          <Footer className="">{/* <CommentPage /> */}</Footer>
        </div>
      </Layout>
    </>
  );
};

export default createTicket;
