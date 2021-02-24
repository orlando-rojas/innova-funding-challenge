import styled from "styled-components";
import uuid from "react-uuid";

export default function Tags({ tags }) {
  if (!tags) return null;
  return (
    <div className="flex mb-3">
      {tags.map((tag) => (
        <Tag
          key={uuid()}
          className={`px-1 mx-1 rounded bg-tags-${tag.type} font-bold text-white`}
        >
          {tag.name}
        </Tag>
      ))}
    </div>
  );
}

const Tag = styled.div`
  font-size: 12px;
`;
