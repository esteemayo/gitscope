import '../../styles/components/sidebar/SidebarCopyright.scss';

const SidebarCopyright = () => {
  return (
    <p className='sidebar-copyright'>
      &copy; {new Date().getFullYear()} GitScope, Inc.
    </p>
  );
};

export default SidebarCopyright;
