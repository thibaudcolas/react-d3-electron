// @flow
import React from "react";

type Props = {
  highlight: string,
  text: string,
  markTag: string,
  caseSensitive: boolean,
};

const mark = (
  val: string,
  str: string,
  markTag: string,
  caseSensitive: boolean,
) => {
  const vals = val ? val.split(" ") : [""];
  let newStr = str;

  if (vals.length === 0) {
    return str;
  }

  vals.filter((v) => v !== "").forEach((v) => {
    var escape = v.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
    var tagStr = "<mark>$&</mark>";

    markTag = markTag || "mark";

    newStr = newStr.replace(RegExp(escape, "gi"), tagStr);
  });

  return newStr;
};

const TextHighlight = ({ highlight, text, markTag, caseSensitive }: Props) => (
  <span
    className="TextHighlight"
    dangerouslySetInnerHTML={{
      __html: mark(highlight, text, markTag, caseSensitive),
    }}
  />
);

TextHighlight.defaultProps = {
  highlight: null,
  text: null,
  markTag: "mark",
  caseSensitive: false,
};

export default TextHighlight;
