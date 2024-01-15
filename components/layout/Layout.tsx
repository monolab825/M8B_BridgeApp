import Header from './Header';

type Props = {
  children: React.ReactNode;
  className?: String
};

const Layout = ({children, className = ''}: Props) => {
  return (
    <div>
      <Header/>
      <main className={`${className}`}>
        {children}
      </main>
    </div>
  )
}

export default Layout;