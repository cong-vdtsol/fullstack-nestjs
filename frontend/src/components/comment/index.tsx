import React, { Children, ReactNode } from "react";

type CommentProps = {
  comment: string;
  children?: ReactNode;
};

const Comment = ({ comment, children }: CommentProps) => {
  return (
    <div>
      <p>Hello {comment}</p>
      <div className="ml-5">{children}</div>
    </div>
  );
};

export const CommentPage: React.FC = () => {
  const listComment = [
    {
      text: "Hello",
      comment: [
        {
          text: "Hello a",
          comment: [
            {
              text: "Hello b",
              comment: [],
            },
          ],
        },
        {
          text: "Hello d",
          comment: [
            {
              text: "Hello e",
              comment: [],
            },
          ],
        },
      ],
    },
    {
      text: "Hello",
      comment: [
        {
          text: "Hello c",
          comment: [
            {
              text: "Hello d",
              comment: [],
            },
          ],
        },
      ],
    },
  ];
  // Render comment
  const renderComment = (comment: any) => {
    return comment.map((item: any) => {
      return (
        <div>
          <Comment comment={item.text} children={renderComment(item.comment)} />
        </div>
      );
    });
  };

  return <div>{renderComment(listComment)}</div>;
};


