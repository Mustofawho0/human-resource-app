export const TableEmployee = ({
  name,
  address,
  email,
  leave,
  position,
  salary,
}) => {
  return (
    <table className="w-full text-xs text-center whitespace-nowrap">
      <tbody className="border-b bg-gray-50 border-gray-300">
        <tr>
          <td className="px-3 py-2">
            <span>{name}</span>
          </td>
          <td className="px-3 py-2">
            <span>{email}</span>
          </td>
          <td className="px-3 py-2">
            <span>{position}</span>
          </td>
          <td className="px-3 py-2">
            <span>{address}</span>
          </td>
          <td className="px-3 py-2">
            <span>{leave}</span>
          </td>
          <td className="px-3 py-2">
            <span>{salary}</span>
          </td>
          <td className="px-3 py-2">
            <button
              type="button"
              title="Open details"
              className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
