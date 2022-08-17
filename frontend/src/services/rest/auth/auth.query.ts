import { useMutation } from "@tanstack/react-query";
import { AuthService } from "./auth.service";

export const useLoginMutation = () => {
  return useMutation((input) => {
    return AuthService.login(input);
  });
};
export const useRegisterMutation = () => {
  return useMutation((input) => {
    return AuthService.postUser(input);
  });
};

export const useResetMutation = () => {
  return useMutation((input) => {
    return AuthService.postReset(input);
  });
};

export const useChangePassMutation = () => {
  return useMutation((input) => {
    return AuthService.postChangePass(input);
  });
};