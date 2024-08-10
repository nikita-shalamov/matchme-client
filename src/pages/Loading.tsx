import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
    return (
        <div className="loading">
            <Flex align="center" gap="middle" style={{ height: "100%", width: "100%", justifyContent: "center" }}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 76 }} spin />} />
            </Flex>
        </div>
    );
};

export default Loading;