import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      // 执行你的异步操作，例如 API 请求
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 模拟 2 秒的延迟
      console.log("操作完成！");
    } catch (error) {
      console.error("操作失败：", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClick} loading={isLoading}>
        {isLoading ? "加载中..." : "点击我"}
      </Button>
    </div>
  );
};

export default MyComponent;