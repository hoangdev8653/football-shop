import slugify from "slugify";

function customSlug(str) {
  return slugify(str, {
    lower: true,
    strict: true,
  });
}

export default customSlug;
