import { ref, onMounted } from "vue";

export function usePosts() {
  const posts = ref([]);

  const fetching = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/?_limit=10&page=1"
    );
    const postsArray = await res.json();
    posts.value = postsArray;
  };

  onMounted(fetching);

  return { posts };
}
