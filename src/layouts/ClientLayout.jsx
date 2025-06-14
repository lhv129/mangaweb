// ClientLayout.jsx
import ClientHeader from './ClientHeader';

const ClientLayout = ({ children }) => (
    <>
        <ClientHeader />
        <main className='container mx-auto'>{children}</main>
    </>
);

export default ClientLayout;
