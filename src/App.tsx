import { Header, Input, Panel } from '@/components';

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center-safe mt-50 w-1/2 m-auto">
        <Panel />
        <Input />
      </div>
    </>
  );
}

export default App;
