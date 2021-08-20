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
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

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

  const userLink = (item) => {
    return (
      <a
        className="text-muted text-decoration-none description"
        href={item.user?.html_url}
      >
        {item.user?.login}
      </a>
    );
  };

  const getLabel = (item) => {
    return (
      <span>
        {userLink(item)} opened this issue {formattedDate(item.created_at)}
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
      <div className="card bg-dark text-white flat-item">
        <div className="mx-2">
          <h1 className="page-detail-title">{`${issue.title} #${issue.number}`}</h1>
          <div className="d-flex">
            <div>{iconLabel(issue)}</div>
            <div className="mx-2">
              <span className="page-detail-subtitle">{getLabel(issue)}</span>
              <div className="my-1">{badges(issue.labels ?? [])}</div>
            </div>
          </div>

          <hr />
        </div>

        <div className="card-body d-flex">
          <div className="mx-2">
            <img
              className="img-profile-comment"
              src={issue.user?.avatar_url}
              alt=""
            />
          </div>
          <div className="flex-fill issue-comment-body">
            <div className="card bg-dark text-white card-prop">
              <div className="card-header">
                <span className="page-detail-subtitle">
                  {userLink(issue)} commented {formattedDate(issue.created_at)}
                </span>
              </div>
              <div className="card-body">
                <div className="markdown-body">
                  <ReactMarkdown escapeHtml={false} rehypePlugins={[rehypeRaw]}>
                    {issue.body}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesDetail;
