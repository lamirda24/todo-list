import api, { request } from "@/config/api";
import { config } from "@/config/config";

const Services = () => {
  const baseUrl = config.api;

  const getActivity = async () => {
    const res = await request.get(`/activity-groups?email=${config.email}`);
    return res.data;
  };
  const addActivity = async (payload) => {
    const res = await request.post(`/activity-groups`, payload);
    return res.data;
  };

  const getDetailActivity = async (id) => {
    const res = await request.get(`/activity-groups/${id}`);
    return res.data;
  };

  const changeTitleActivity = async (id, data) => {
    const res = await request.patch(`activity-groups/${id}`, data);
    return res.data;
  };

  const addTodo = async (data) => {
    const res = await request.post(`/todo-items`, data);
    return res?.data;
  };

  const editTodoStatus = async (id, data) => {
    const res = await request.patch(`/todo-items/${id}`, data);
    return res?.data;
  };

  const deleteTodo = async (id) => {
    const res = await request.delete(`/todo-items/${id}`);
    return res.data;
  };

  const deleteActivity = async (id) => {
    const res = await request.delete(`/activity-groups/${id}`);
    return res?.data;
  };

  return {
    getActivity,
    addActivity,
    addTodo,
    getDetailActivity,
    changeTitleActivity,
    editTodoStatus,
    deleteTodo,
    deleteActivity,
  };
};
export default Services();
