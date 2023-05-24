export default function Home() {
  return (
    <div>
      <div className="my-10"></div> {/* 这里添加一个空的 <div> 元素并设置间距样式 */}

      <nav className="container mx-auto px-6 py-2 flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
        <div className="font-bold text-xl text-white">
          凡学子
        </div>

        <div className="flex space-x-4">
          <a href="#" className="flex items-center justify-center text-white text-md bg-white bg-opacity-25 px-4 py-2 rounded-lg hover:bg-opacity-50 transition duration-300 w-24">首页</a>
          <a href="#" className="flex items-center justify-center text-white text-md bg-white bg-opacity-25 px-4 py-2 rounded-lg hover:bg-opacity-50 transition duration-300 w-24">历史文章</a>
          <a href="#" className="flex items-center justify-center text-white text-md bg-white bg-opacity-25 px-4 py-2 rounded-lg hover:bg-opacity-50 transition duration-300 w-24">有趣的事</a>
          <a href="#" className="flex items-center justify-center text-white text-md bg-white bg-opacity-25 px-4 py-2 rounded-lg hover:bg-opacity-50 transition duration-300 w-24">联系我</a>
        </div>
      </nav>

      <div className="my-10"></div> {/* 这里添加一个空的 <div> 元素并设置间距样式 */}

      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <svg t="1684593262099" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1780" width="48" height="48"><path d="M704 192c-68.693333 0-148.992 77.866667-192 128-43.008-50.133333-123.306667-128-192-128C198.442667 192 128 286.805333 128 407.466667c0 133.674667 128 275.2 384 424.533333 256-149.333333 384-288 384-416 0-120.661333-70.442667-224-192-224z" fill="#c76abf" opacity=".3" p-id="1781"></path><path d="M512 832C256 682.666667 128 541.141333 128 407.466667 128 286.805333 198.442667 192 320 192c68.693333 0 148.992 77.866667 192 128v512z" fill="#c76abf" p-id="1782"></path></svg>
          <div className="font-bold text-xl text-black ml-2">凡学子</div>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="flex items-center justify-center text-black text-md bg-white px-4 py-2 rounded-lg">
            首页
          </a>
          <a href="#" className="flex items-center justify-center text-black text-md bg-white px-4 py-2 rounded-lg">
            历史文章 <span className="ml-1">&#9662;</span>
          </a>
          <a href="#" className="flex items-center justify-center text-black text-md bg-white px-4 py-2 rounded-lg">
            有趣的事 <span className="ml-1">&#9662;</span>
          </a>
          <a href="#" className="flex items-center justify-center text-black text-md bg-white px-4 py-2 rounded-lg">
            联系我 <span className="ml-1">&#9662;</span>
          </a>
          <button className="flex items-center justify-center bg-violet-500 text-white px-4 py-2 rounded-lg">
            免费注册
          </button>
          <button className="flex items-center justify-center bg-indigo-50 text-violet-500 px-4 py-2 rounded-lg">
            登录
          </button>
        </div>
      </nav>

   </div>   
  );
}
