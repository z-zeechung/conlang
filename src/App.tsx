import { Avatar, Button, Card, Flex, List, Tag, Typography } from 'antd'
import Tools from "./tools.json"
import { AndroidFilled, AppleFilled, BaiduOutlined, GithubFilled, GlobalOutlined, LinuxOutlined, MailOutlined, UserOutlined, WindowsFilled} from '@ant-design/icons'
import { useWindowSize } from './utils'

function App() {

  const isMobile = useWindowSize().width <= 600

  return <Flex vertical align='center' gap={"middle"}>
    <Flex vertical align='center' gap={"small"}>
      <Typography.Title level={2} style={{fontFamily:"serif"}}>造语工具</Typography.Title>
      <Typography.Text type='secondary' style={{textAlign:"center"}}>
        如果链接失效或页面出现错误，或者有要补充的工具，请联系我：
        <a href='https://tieba.baidu.com/home/main?id=tb.1.11eca9d7.EBtxdQmBZZPzGUwzZ9CiXg?t=1628693040&fr=pb' target="_blank">
          <Tag icon={<BaiduOutlined/>} color='blue'>贴吧：子充ZeeChung</Tag>
        </a>
        <Tag icon={<MailOutlined/>} color='green'>zhouzeechung@qq.com</Tag>
        <a href='https://github.com/z-zeechung/conlang' target="_blank">
          <Tag icon={<GithubFilled/>} color='#000'>z-zeechung/conlang</Tag>
        </a>
      </Typography.Text>
      <Typography.Text style={{textAlign:"center"}}>by&nbsp;
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
    {!isMobile&&<>
      <Card title="单词生成" style={{width:"100%"}}>
        <Flex gap={"small"} wrap justify='center'>
          {Tools.word_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
        </Flex>
      </Card>
      <Card title="字体制作" style={{width:"100%"}}>
        <Flex gap={"small"} wrap justify='center'>
          {Tools.font_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
        </Flex>
      </Card>
      <Card title="输入法制作" style={{width:"100%"}}>
        <Flex gap={"small"} wrap justify='center'>
          {Tools.ime_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
        </Flex>
      </Card>
      <Card title="词典编纂" style={{width:"100%"}}>
        <Flex gap={"small"} wrap justify='center'>
          {Tools.dict_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
        </Flex>
      </Card>
      <Card title="码表" style={{width:"100%"}}>
        <Flex gap={"small"} wrap justify='center'>
          {Tools.code_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
        </Flex>
      </Card>
      <Card title="翻译器" style={{width:"100%"}}>
        <Flex gap={"small"} wrap justify='center'>
          {Tools.translate_tools.map((tool, idx)=><ToolCard tool={tool} key={idx}/>)}
        </Flex>
      </Card>
    </>}
    {isMobile&&<>
      <List
        header={<Typography.Title level={4}>单词生成</Typography.Title>}
        style={{width:"95%"}}
        dataSource={Tools.word_tools}
        renderItem={renderItem}
      />
      <List
        header={<Typography.Title level={4}>字体制作</Typography.Title>}
        style={{width:"95%"}}
        dataSource={Tools.font_tools}
        renderItem={renderItem}
      />
      <List
        header={<Typography.Title level={4}>输入法制作</Typography.Title>}
        style={{width:"95%"}}
        dataSource={Tools.ime_tools}
        renderItem={renderItem}
      />
      <List
        header={<Typography.Title level={4}>词典编纂</Typography.Title>}
        style={{width:"95%"}}
        dataSource={Tools.dict_tools}
        renderItem={renderItem}
      />
      <List
        header={<Typography.Title level={4}>码表</Typography.Title>}
        style={{width:"95%"}}
        dataSource={Tools.code_tools}
        renderItem={renderItem}
      />
      <List
        header={<Typography.Title level={4}>翻译器</Typography.Title>}
        style={{width:"95%"}}
        dataSource={Tools.translate_tools}
        renderItem={renderItem}
      />
    </>}
  </Flex>
}

function ToolCard(props: { tool: any}) {
  const tool = props.tool
  return <Card 
    style={{width:360}}
    styles={{header:{paddingRight:4}}}
    title={<Flex gap={"middle"} align='center'>
      {tool?.icon?<Avatar src={tool.icon} shape={"square"}/>:undefined}
      {tool?.name}
    </Flex>}
    extra={<>
      {tool?.author&&<a href={tool?.authorpage?tool.authorpage:undefined} target="_blank"><Tag icon={<UserOutlined/>}>{tool.author}</Tag></a>}
      {tool.homepage&&<a href={tool.homepage} target="_blank"><Tag color='green' icon={<GlobalOutlined/>}>主页</Tag></a>}
    </>}
  >
    <Flex vertical gap={"middle"}>
      <Typography.Text>{tool?.introduction}</Typography.Text>
      <Flex gap={"small"} wrap>
        {tool?.downloads?.windows&&<ToolDownloadButton url={tool.downloads.windows} platform="windows"/>}
        {tool?.downloads?.android&&<ToolDownloadButton url={tool.downloads.android} platform="android"/>}
        {tool?.downloads?.linux&&<ToolDownloadButton url={tool.downloads.linux} platform="linux"/>}
        {tool?.downloads?.macos&&<ToolDownloadButton url={tool.downloads.macos} platform="macos"/>}
        {tool?.downloads?.ios&&<ToolDownloadButton url={tool.downloads.ios} platform="ios"/>}
      </Flex>
    </Flex>
  </Card>
}
function renderItem(item:any, idx:number){
  return <List.Item key={idx}>
    <List.Item.Meta
      title={item.name}
      description={<>
        {item?.author&&<a href={item?.authorpage?item.authorpage:undefined} target="_blank"><Tag icon={<UserOutlined/>}>{item.author}</Tag></a>}
        {item.homepage&&<a href={item.homepage} target="_blank"><Tag color='green' icon={<GlobalOutlined/>}>主页</Tag></a>}
      </>}
      avatar={item?.icon?<Avatar src={item.icon} shape={"square"}/>:undefined}
    />
    <p/>
    {item?.introduction}
    <p/>
    <Flex gap={"small"} wrap>
      {item?.downloads?.windows&&<ToolDownloadButton url={item.downloads.windows} platform="windows"/>}
      {item?.downloads?.android&&<ToolDownloadButton url={item.downloads.android} platform="android"/>}
      {item?.downloads?.linux&&<ToolDownloadButton url={item.downloads.linux} platform="linux"/>}
      {item?.downloads?.macos&&<ToolDownloadButton url={item.downloads.macos} platform="macos"/>}
      {item?.downloads?.ios&&<ToolDownloadButton url={item.downloads.ios} platform="ios"/>}
    </Flex>
  </List.Item>
}
function ToolDownloadButton(props:{url:any, platform:string}){
  const icon = {
    "windows": <WindowsFilled/>,
    "linux": <LinuxOutlined/>,
    "macos": <AppleFilled/>,
    "android": <AndroidFilled/>,
    "ios": <img src='/iOS.svg' width={12} height={12}/>
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
