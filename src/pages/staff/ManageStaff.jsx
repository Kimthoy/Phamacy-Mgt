import { useEffect, useState } from "react";
import axios from "axios";
import "./ManageStaff.css";
import { useTranslation } from "../../hooks/useTranslation";

const ManageStaff = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="staff-container">
      <h2 className="staff-title">{t("ManageStaff.Manage")}</h2>
      <div>
        <button className="add-staff">{t("ManageStaff.AddStaff")}</button>
      </div>
      {loading ? (
        <p className="loading-message">{t("ManageStaff.LoadingUsers")}</p>
      ) : (
        <div className="staff-table-wrapper">
          <table className="staff-table">
            <thead className="staff-table-header">
              <tr>
                <th>#</th>
                <th>{t("ManageStaff.Name")}</th>
                <th>{t("ManageStaff.Email")}</th>
                <th>{t("ManageStaff.Phone")}</th>
                <th>{t("ManageStaff.Role")}</th>
                <th>{t("ManageStaff.Active")}</th>
                <th>{t("ManageStaff.Actions")}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="staff-table-row">
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        user.is_active ? "active-status" : "inactive-status"
                      }`}
                    >
                      {user.is_active ? "Active" : "InActive"}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn edit-btn">Edit</button>
                    <button className="action-btn delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageStaff;
