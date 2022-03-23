import MyLayout from '../component/common/layout'

export default function Home(Props) {
  return (
    <>
      <div>put the diagram here</div>
    </>
  )
}
Home.getLayout = (home) => (
  <MyLayout number='1'>
    {home}
  </MyLayout>
)