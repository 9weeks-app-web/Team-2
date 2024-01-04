// 유틸리티 함수
export const dateDiff = (createdAt: string) => {
  const date = new Date(createdAt);
  const diffInMilliseconds = Date.now() - date.getTime();
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

  if (diffInMinutes < 1) {
    return "방금 전";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInMinutes < 1440) {
    const diffInHours = Math.floor(diffInMinutes / 60);
    return `${diffInHours}시간 전`;
  } else {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}. ${month < 10 ? `0${month}` : month}. ${
      day < 10 ? `0${day}` : day
    }.`;
  }
};

export const getDDay = (targetDate: string) => {
  const today = new Date();
  const deadline = new Date(targetDate);
  const timeDiff = deadline.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  if (!daysDiff) return `Error`;
  return `D-${daysDiff}`;
};
