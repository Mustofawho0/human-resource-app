const HeaderDashboard = ({ breadcumbsLink, title }) => {
  return (
    <div className="bg-gray-100 px-14 py-5 ">
      <p className="text-gray-500 text-sm">{breadcumbsLink}</p>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
};

export default HeaderDashboard;
