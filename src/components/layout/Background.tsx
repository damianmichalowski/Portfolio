const Background = () => {
  return (
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-slate-950 transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <div className="absolute inset-0 bg-white transition-opacity duration-300 ease-in-out opacity-100 dark:opacity-0">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
      </div>
    </div>
  );
};

export default Background; 