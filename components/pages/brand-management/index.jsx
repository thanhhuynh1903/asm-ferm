import "./index.scss";
import ExportDropdown from "../../molecules/export-dropdown";
import CreateUserModal from "../../molecules/create-user-modal";
import UsersTable from "../../organisms/users-table";
import { useEffect, useState } from "react";
import SearchBarAM from "../../atoms/search-bar";
import api from "../../../config/axios";
const UserManagement = () => {
  const [refresh, setRefresh] = useState(0);
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [numberOfEach, setNumberOfEach] = useState(4);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [roles, setRoles] = useState([]);

  const onSearch = (value) => {
    console.log(value);
    setSearch(value);
  };
  const getListUser = async () => {
    try {
      setLoading(true);
      console.log(search);
      let response;
      response = await api.get(`/users?search=${search}`);
      console.log(response);
      if (response.status === 200) {
        setUsers(
          response.data.map((row) => ({
            key: row.id,
            id: row.id,
            email: row.email,
            avatar: row.photos,
            firstName: row.firstName,
            lastName: row.lastName,
            roles: row.roles,
            enabled: row.enabled,
          }))
        );
        console.log(response);
        setTotalUsers(response.data.length);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getRoles = async () => {
    const response = await api.get("/roles");
    console.log(response);
    setRoles(response.data);
  };
  useEffect(() => {
    getRoles();
    getListUser();
  }, [refresh, search]);

  return (
    <>
      <div className="d-flex flex-column align-items-center algin-items-center w-100 my-5">
        <div className="box-container">
          <div className="d-flex justify-content-between">
            <h3 className="text-dark text-start mb-4">User Management</h3>
            <div>
              <CreateUserModal
                refresh={refresh}
                setRefresh={setRefresh}
                roles={roles}
                url="add/brand"
                status="create"
              />
            </div>
          </div>
          <div className="box-container__content">
            <div className="d-flex justify-content-between p-3">
              <div className="w-100 d-flex justify-content-between">
                <div>
                  <SearchBarAM onSearch={onSearch} />
                </div>
                <div className="d-flex">
                  <ExportDropdown />
                </div>
              </div>
            </div>
            <div className="table-container">
              <UsersTable
                loading={loading}
                users={users}
                numberOfEach={numberOfEach}
                totalUsers={totalUsers}
                getListUser={getListUser}
                roles={roles}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
