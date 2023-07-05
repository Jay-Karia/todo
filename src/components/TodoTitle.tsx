type TodoTitleProps = {
    children: JSX.Element;
};

const TodoTitle = ({ children }: TodoTitleProps) => (
    <h1 className="text-8xl py-10 text-slate-800 ">{children}</h1>
);

export { TodoTitle };