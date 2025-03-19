import { Avatar, Button, Card, Flex, Tag, Typography } from 'antd'
import Tools from "./tools.json"
import { AndroidFilled, AppleFilled, BaiduOutlined, GithubFilled, GlobalOutlined, LinuxOutlined, MailOutlined, QqOutlined, WindowsFilled} from '@ant-design/icons'

function App() {
  return <Flex vertical align='center' gap={"middle"}>
    <Flex vertical align='center' >
      <Typography.Title level={2} style={{fontFamily:"serif"}}>造语工具</Typography.Title>
      <Typography.Text type='secondary'>
        如果链接失效或页面出现错误，或者有要补充的工具，请联系我：
        <a href='https://tieba.baidu.com/home/main?id=tb.1.11eca9d7.EBtxdQmBZZPzGUwzZ9CiXg?t=1628693040&fr=pb' target="_blank">
          <Tag icon={<BaiduOutlined/>} color='blue'>贴吧：子充ZeeChung</Tag>
        </a>
        <Tag icon={<MailOutlined/>} color='green'>zhouzeechung@qq.com</Tag>
        <a href='https://github.com/z-zeechung/conlang' target="_blank">
          <Tag icon={<GithubFilled/>} color='#000'>z-zeechung/conlang</Tag>
        </a>
      </Typography.Text>
      <Typography.Text>by&nbsp;
        <a href='https://tieba.baidu.com/home/main?id=tb.1.11eca9d7.EBtxdQmBZZPzGUwzZ9CiXg?t=1628693040&fr=pb' target="_blank">
          子充ZeeChung
        </a>
        &nbsp;from&nbsp;
        <a href='https://tieba.baidu.com/f?kw=%E4%BA%BA%E9%80%A0%E8%AF%AD%E8%A8%80&ie=utf-8' target="_blank">
          <Avatar src="https://imgsa.baidu.com/forum/pic/item/5366d0160924ab185cf4dc0639fae6cd7b890b24.jpg" size={"small"}/>
          人造语言吧-百度贴吧
        </a>
      </Typography.Text>
    </Flex>
    <Card title="单词生成" style={{width:"100%"}}>
      <Flex gap={"small"} wrap>
        {Tools.word_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
      </Flex>
    </Card>
    <Card title="字体制作" style={{width:"100%"}}>
      <Flex gap={"small"} wrap>
        {Tools.font_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
      </Flex>
    </Card>
    <Card title="输入法制作" style={{width:"100%"}}>
      <Flex gap={"small"} wrap>
        {Tools.ime_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
      </Flex>
    </Card>
    <Card title="词典编纂" style={{width:"100%"}}>
      <Flex gap={"small"} wrap>
        {Tools.dict_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
      </Flex>
    </Card>
    <Card title="码表" style={{width:"100%"}}>
      <Flex gap={"small"} wrap>
        {Tools.code_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
      </Flex>
    </Card>
    <Card title="翻译器" style={{width:"100%"}}>
      <Flex gap={"small"} wrap>
        {Tools.translate_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
      </Flex>
    </Card>
  </Flex>
}

function ToolCard(props: { tool: any}) {
  const tool = props.tool
  return <Card 
    style={{width:400}}
    title={<Flex gap={"middle"} align='center'>
      {tool?.icon?<Avatar src={tool.icon} shape={"square"}/>:undefined}
      {tool?.name}
    </Flex>}
    extra={<>
      {tool?.author&&<a href={tool?.authorpage?tool.authorpage:undefined} target="_blank"><Tag>{tool.author}</Tag></a>}
      {tool.homepage&&<a href={tool.homepage} target="_blank"><Tag color='green' icon={<GlobalOutlined/>}>主页</Tag></a>}
    </>}
  >
    <Flex vertical gap={"middle"}>
      <Typography.Text>{tool?.introduction}</Typography.Text>
      <Flex gap={"small"} wrap>
        {tool?.downloads?.windows&&<ToolDownloadButton url={tool.downloads.windows} platform="windows"/>}
        {tool?.downloads?.linux&&<ToolDownloadButton url={tool.downloads.linux} platform="linux"/>}
        {tool?.downloads?.macos&&<ToolDownloadButton url={tool.downloads.macos} platform="macos"/>}
        {tool?.downloads?.android&&<ToolDownloadButton url={tool.downloads.android} platform="android"/>}
        {tool?.downloads?.ios&&<ToolDownloadButton url={tool.downloads.ios} platform="ios"/>}
      </Flex>
    </Flex>
  </Card>
}
function ToolDownloadButton(props:{url:any, platform:string}){
  const icon = {
    "windows": <WindowsFilled/>,
    "linux": <LinuxOutlined/>,
    "macos": <AppleFilled/>,
    "android": <AndroidFilled/>,
    "ios": <img src='/iOS.svg' width={14} height={14}/>
  }[props.platform]
  const name = {
    "windows": "Windows",
    "linux": "Linux",
    "macos": "MacOS",
    "android": "安卓",
    "ios": "iOS"
  }[props.platform]
  const color = {
    "windows": "geekblue",
    "linux": "purple",
    "macos": "default",
    "android": "green",
    "ios": "default"
  }[props.platform] as any
  return <Button 
    icon={icon} size='small' shape='round' color={color} variant='filled'
    onClick={()=>window.open(props.url)}
  >{name}下载</Button>
}

export default App
