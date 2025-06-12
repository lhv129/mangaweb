// ClientLayout.jsx
import ClientHeader from './ClientHeader';

const ClientLayout = ({ children }) => (
    <>
        <ClientHeader />
        <main className='container px-6'>{children}</main>
    </>
);

export default ClientLayout;
