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
  InfoContract
} from "../../components";
const { Header, Footer, Content } = Layout;

const createTicket: React.FC = () => {
  return (
    <>
      <Layout className="rounded mx-auto bg-backgroundAuth relative">
        <div className="absolute left-100 w-auto h-auto ">
          <h1>Create Ticket</h1>
          <Header className="bg-inherit h-auto w-100">
            <InfoContract/>
          </Header>
          <Content className="">
            <UpLoad/>
          </Content>
          <Footer className="">
            <CommentPage />
          </Footer>
        </div>
      </Layout>
    </>
  );
};

export default createTicket;
