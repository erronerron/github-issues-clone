import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchIssue } from "../../store/actions";

import PageHeader from "../common/PageHeader";
import { IconContext } from "react-icons/lib";
import { RiRecordCircleLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import BadgeItem from "../common/BadgeItem";
import { formattedDate } from "../../utils/fomatter";

const IssuesDetail = () => {
  const issue = useSelector((state) => state.issue);
  const owner = useSelector((state) => state.repo.owner?.login);
  const repository = useSelector((state) => state.repo.name);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIssue(owner, repository, id));
  }, [dispatch, owner, repository, id]);

  const badges = (items = []) => {
    return items.map((item, index) => {
      return <BadgeItem key={index} item={item} />;
    });
  };

  const getLabel = (item) => {
    const user_link = (
      <a
        className="text-muted text-decoration-none description"
        href={item.user?.html_url}
      >
        {item.user?.login}
      </a>
    );

    return (
      <span>
        {user_link} opened this issue {formattedDate(item.created_at)}
      </span>
    );
  };

  const iconLabel = (item) => {
    if (item.state === "open") {
      return (
        <IconContext.Provider value={{ color: "white" }}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="badge rounded-pill bg-success page-detail-badge">
              <RiRecordCircleLine />
              Open
            </span>
          </div>
        </IconContext.Provider>
      );
    }

    return (
      <IconContext.Provider value={{ color: "white" }}>
        <div className="d-flex align-items-center justify-content-center">
          <span className="badge rounded-pill bg-danger page-detail-badge">
            <IoCheckmarkCircleOutline />
            Closed
          </span>
        </div>
      </IconContext.Provider>
    );
  };

  return (
    <div className="container my-3">
      <PageHeader owner={owner} repository={repository} />
      <div className="card bg-dark text-white card-prop">
        <div className="card-header align-items-center">
          <h1 className="page-detail-title">{`${issue.title} #${issue.number}`}</h1>
          <div className="d-flex">
            <div>{iconLabel(issue)}</div>
            <div className="mx-2">
              <span className="page-detail-subtitle">{getLabel(issue)}</span>
              <div className="my-1">{badges(issue.labels ?? [])}</div>
            </div>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-center"></div>
      </div>
    </div>
  );
};

export default IssuesDetail;
